const { Router } = require('express')
const router = Router()
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require('../controllers/notes.controllers')

const { isAuthenticated } = require('../helpers/auth')

/* ROUTES */
router.get('/notes/add', isAuthenticated, renderNoteForm) // Form Note
router.post('/notes/new-note', isAuthenticated, createNewNote) // New Note
router.get('/notes', isAuthenticated, renderNotes) // Get All Notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm) // Form Edit Note
router.put('/notes/edit/:id', isAuthenticated, updateNote) // Update Note
router.delete('/notes/delete/:id',isAuthenticated, deleteNote) // Delete Note

module.exports = router
