const notesCtrl = {}
const Note = require('../models/Note')

notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body
  const newNote = new Note({ title, description })
  newNote.user= req.user.id
  await newNote.save()
  req.flash('success_msg', 'Note added successfully')
  res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({user: req.user.id}).lean().sort({createdAt: 'desc'})
  res.render('notes/all-notes', { notes })
}

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean()
  if(req.user.id !== note.user){
    req.flash('error_msg', 'Not authorized')
    return res.redirect('/notes')
  }
  res.render('notes/edit-notes', { note })
}

notesCtrl.updateNote = async (req, res) => {
  const { title, description } = req.body
  await Note.findByIdAndUpdate(req.params.id, { title, description }).lean();
  req.flash('success_msg', 'Note updated successfully')
  res.redirect('/notes')
}

notesCtrl.deleteNote = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if(req.user.id !== note.user){
    req.flash('error_msg', 'Not authorized')
    return res.redirect('/notes')
  }
  await Note.findByIdAndDelete(req.params.id).lean();
  req.flash('success_msg', 'Note deleted successfully')
  res.redirect('/notes')
}

module.exports = notesCtrl
