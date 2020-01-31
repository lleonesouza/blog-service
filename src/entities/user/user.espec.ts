import makeFakeUser from '../../__test__/fixtures/User'
import {makeUser} from './index'
describe('User', () => {
  it('must have an author', () => {
    const User = makeFakeUser({ author: null })
    expect(() => makeUser(User)).toThrow('User must have an author.')
  })

  it('must have a valid post id', () => {
    const User = makeFakeUser({ postId: null })
    expect(() => makeUser(User)).toThrow('User must contain a postId.')
  })
  it('must have valid text', () => {
    const User = makeFakeUser({ text: null })
    expect(() => makeUser(User)).toThrow(
      'User must include at least one character of text.'
    )
  })
  it('can be in reply to another User', () => {
    const User = makeFakeUser({ replyToId: 'invalid' })
    expect(() => makeUser(User)).toThrow(
      'If supplied. User must contain a valid replyToId.'
    )
    const notInReply = makeFakeUser({ replyToId: undefined })
    expect(() => makeUser(notInReply)).not.toThrow()
  })
  it('can have an id', () => {
    const User = makeFakeUser({ id: 'invalid' })
    expect(() => makeUser(User)).toThrow('User must have a valid id.')
    const noId = makeFakeUser({ id: undefined })
    expect(() => makeUser(noId)).not.toThrow()
  })
  it('can create an id', () => {
    const noId = makeFakeUser({ id: undefined })
    const User = makeUser(noId)
    expect(User.getId()).toBeDefined()
  })
  it('can be published', () => {
    const unpublished = makeFakeUser({ published: false })
    const User = makeUser(unpublished)
    expect(User.isPublished()).toBe(false)
    User.publish()
    expect(User.isPublished()).toBe(true)
  })
  it('can be unpublished', () => {
    const unpublished = makeFakeUser({ published: true })
    const User = makeUser(unpublished)
    expect(User.isPublished()).toBe(true)
    User.unPublish()
    expect(User.isPublished()).toBe(false)
  })
  it('is createdOn now in UTC', () => {
    const noCreationDate = makeFakeUser({ createdOn: undefined })
    expect(noCreationDate.createdOn).not.toBeDefined()
    const d = makeUser(noCreationDate).getCreatedOn()
    expect(d).toBeDefined()
    expect(new Date(d).toUTCString().substring(26)).toBe('GMT')
  })
  it('is modifiedOn now in UTC', () => {
    const noModifiedOnDate = makeFakeUser({ modifiedOn: undefined })
    expect(noModifiedOnDate.modifiedOn).not.toBeDefined()
    const d = makeUser(noModifiedOnDate).getCreatedOn()
    expect(d).toBeDefined()
    expect(new Date(d).toUTCString().substring(26)).toBe('GMT')
  })
  it('sanitizes its text', () => {
    const sane = makeUser({
      ...makeFakeUser({ text: '<p>This is fine</p>' })
    })
    const insane = makeUser({
      ...makeFakeUser({
        text: '<script>This is not so fine</script><p>but this is ok</p>'
      })
    })
    const totallyInsane = makeFakeUser({
      text: '<script>All your base are belong to us!</script>'
    })

    expect(sane.getText()).toBe('<p>This is fine</p>')
    expect(insane.getText()).toBe('<p>but this is ok</p>')
    expect(() => makeUser(totallyInsane)).toThrow(
      'User contains no usable text.'
    )
  })
  it('can be marked deleted', () => {
    const fake = makeFakeUser()
    const c = makeUser(fake)
    c.markDeleted()
    expect(c.isDeleted()).toBe(true)
    expect(c.getText()).toBe('.xX This User has been deleted Xx.')
    expect(c.getAuthor()).toBe('deleted')
  })
  it('includes a hash', () => {
    const fakeUser = {
      author: 'Bruce Wayne',
      text: "I'm batman.",
      postId: 'cjt65art5350vy000hm1rp3s9',
      published: true,
      source: { ip: '127.0.0.1' }
    }
    // md5 from: http://www.miraclesalad.com/webtools/md5.php
    expect(makeUser(fakeUser).getHash()).toBe(
      '7bb94f070d9305976b5381b7d3e8ad8a'
    )
  })
  it('must have a source', () => {
    const noSource = makeFakeUser({ source: undefined })
    expect(() => makeUser(noSource)).toThrow('User must have a source.')
  })
  it('must have a source ip', () => {
    const noIp = makeFakeUser({ source: { ip: undefined } })
    expect(() => makeUser(noIp)).toThrow(
      'User source must contain an IP.'
    )
  })
  it('can have a source browser', () => {
    const withBrowser = makeFakeUser()
    expect(
      makeUser(withBrowser)
        .getSource()
        .getBrowser()
    ).toBe(withBrowser.source.browser)
  })
  it('can have a source referrer', () => {
    const withRef = makeFakeUser()
    expect(
      makeUser(withRef)
        .getSource()
        .getReferrer()
    ).toBe(withRef.source.referrer)
  })
})