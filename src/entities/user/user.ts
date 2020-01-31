export default function buildMakeComment({ Id, md5, sanitizeUser, makeSource }:any) {
  return function makeComment({
    email,
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
    if (!email) {
      throw new Error("Comment must have an email.");
    }
    if (email.length < 2) {
      throw new Error(
        "Comment email's name must be longer than 2 characters."
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

    let sanitizedText = sanitizeUser(text).trim();
    if (sanitizedText.length < 1) {
      throw new Error("Comment contains no usable text.");
    }

    const validSource = makeSource(source);
    const deletedText = ".xX This comment has been deleted Xx.";
    let hash = {};

    return Object.freeze({
      getEmail: () => email,
      getCreatedOn: () => createdOn,
      getHash: () => hash || (hash = makeHash()),
      getId: () => id,
      getModifiedOn: () => modifiedOn,
      getUserId: () => postId,
      getReplyToId: () => replyToId,
      getSource: () => validSource,
      getText: () => sanitizedText,
      isActive: () => active,
      isDeleted: () => sanitizedText === deletedText,
      markDeleted: () => {
        sanitizedText = deletedText;
        email = "deleted";
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
        sanitizedText +
          active +
          (email || "") +
          (postId || "") +
          (replyToId || "")
      );
    }
  };
}
