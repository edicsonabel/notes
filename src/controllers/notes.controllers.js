const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note')
}

notesCtrl.createNewNote = (req, res) => {
  console.log(req.body)
  res.send('Note Created')
}

notesCtrl.renderNotes = (req, res) => {
  res.send('All Notes')
}

notesCtrl.renderEditForm = (req, res) => {
  res.send('Edit Form')
}

notesCtrl.updateNote = (req, res) => {
  res.send('Update Note')
}

notesCtrl.deleteNote = (req, res) => {
  res.send('Delete Note')
}

module.exports = notesCtrl
