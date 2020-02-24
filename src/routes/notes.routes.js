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

/* ROUTES */
router.get('/notes/add', renderNoteForm) // Form Note
router.post('/notes/new-note', createNewNote) // New Note
router.get('/notes', renderNotes) // Get All Notes
router.get('/notes/edit/:id', renderEditForm) // Form Edit Note
router.put('/notes/edit/:id', updateNote) // Update Note
router.delete('/notes/delete/:id', deleteNote) // Delete Note

module.exports = router
