const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
  res.send('Note Form')
}

notesCtrl.createNewNote = (req, res) => {
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
