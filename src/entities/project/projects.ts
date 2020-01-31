export default function buildMakeComment({ Id, md5, sanitizeProjects, makeSource }:any) {
  return function makeComment({
    author,
    createdOn = Date.now(),
    id = Id.makeId(),
    source,
    modifiedOn = Date.now(),
    postId,
    active = false,
    replyToId,
    text
  }: any = {}) {
    if (!Id.isValidId(id)) {
      throw new Error("Comment must have a valid id.");
    }
    if (!author) {
      throw new Error("Comment must have an author.");
    }
    if (author.length < 2) {
      throw new Error(
        "Comment author's name must be longer than 2 characters."
      );
    }
    if (!postId) {
      throw new Error("Comment must contain a postId.");
    }
    if (!text || text.length < 1) {
      throw new Error("Comment must include at least one character of text.");
    }
    if (!source) {
      throw new Error("Comment must have a source.");
    }
    if (replyToId && !Id.isValidId(replyToId)) {
      throw new Error("If supplied. Comment must contain a valid replyToId.");
    }

    let sanitizeProjectdText = sanitizeProjects(text).trim();
    if (sanitizeProjectdText.length < 1) {
      throw new Error("Comment contains no usable text.");
    }

    const validSource = makeSource(source);
    const deletedText = ".xX This comment has been deleted Xx.";
    let hash = {};

    return Object.freeze({
      getEmail: () => author,
      getCreatedOn: () => createdOn,
      getHash: () => hash || (hash = makeHash()),
      getId: () => id,
      getModifiedOn: () => modifiedOn,
      getUserId: () => postId,
      getReplyToId: () => replyToId,
      getSource: () => validSource,
      getText: () => sanitizeProjectdText,
      isDeleted: () => sanitizeProjectdText === deletedText,
      isActive: () => active,
      markDeleted: () => {
        sanitizeProjectdText = deletedText;
        author = "deleted";
      },
      active: () => {
        active = true;
      },
      desactive: () => {
        active = false;
      }
    });

    function makeHash() {
      return md5(
        sanitizeProjectdText +
          active +
          (author || "") +
          (postId || "") +
          (replyToId || "")
      );
    }
  };
}