require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60e72e9d6e456d1a40a93495')
//   .then(result => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => console.log(e));

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('60e72e06e0be3e196dc1a6d4')
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
