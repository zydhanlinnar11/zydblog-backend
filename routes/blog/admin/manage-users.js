module.exports = (checkAuthenticated) => {
  const express = require('express')
  const Users = require('../../../models/user')
  const router = express.Router()

  router.get('/', checkAuthenticated, async (req, res) => {
    const currentUserName = await req.user
    const users = await Users.find().sort({ date: 'desc' })
    res.render('manage-users', {
      title: 'Manage users',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Manage users',
      users: users,
      loggedIn: true,
      currentUserName: currentUserName.username,
      success: '',
      blogOwner: process.env.BLOG_OWNER,
    })
  })

  router.delete('/:username', checkAuthenticated, async (req, res) => {
    const currentUserName = await req.user
    try {
      const user = await Users.findOne({ username: req.params.username })
      user.remove()
      const users = await Users.find().sort({ date: 'desc' })
      res.render('manage-users', {
        title: 'Manage users',
        blogName: process.env.BLOG_NAME,
        mainTitle: 'Manage users',
        users: users,
        loggedIn: true,
        currentUserName: currentUserName.username,
        success: 'yes',
        blogOwner: process.env.BLOG_OWNER,
      })
    } catch (error) {
      const users = await Users.find().sort({ date: 'desc' })
      res.render('manage-users', {
        title: 'Manage users',
        blogName: process.env.BLOG_NAME,
        mainTitle: 'Manage users',
        users: users,
        loggedIn: true,
        currentUserName: currentUserName.username,
        success: 'no',
        blogOwner: process.env.BLOG_OWNER,
      })
    }
  })
  return router
}