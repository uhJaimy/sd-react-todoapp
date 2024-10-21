import './App.css';

function App() {
  return (
    <div class="container">
      <div class="actions">
        <div class="add">
          <textarea placeholder='Task Name'></textarea>
          <textarea placeholder='Task Description'></textarea>
          <button>Add Task</button>
        </div>
        <button>Clear All</button>
      </div>
      <div class="categories">
        <div class="tasks high">
          <h2>High priority tasks</h2>
          <div class="task">
            <h3>Task Name</h3>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut est quis libero blandit suscipit at iaculis leo. Nunc dapibus enim ac sem feugiat imperdiet. Suspendisse potenti. Mauris eu pellentesque diam. Sed nec nibh leo. Sed vulputate eu purus eget gravida. Phasellus pretium nisi interdum nunc vulputate feugiat.</p>
          </div>
        </div>
        <div class="tasks normal">
          <h2>Regular tasks</h2>
          <div class="task">
            <h3>Task Name</h3>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut est quis libero blandit suscipit at iaculis leo. Nunc dapibus enim ac sem feugiat imperdiet. Suspendisse potenti. Mauris eu pellentesque diam. Sed nec nibh leo. Sed vulputate eu purus eget gravida. Phasellus pretium nisi interdum nunc vulputate feugiat.</p>
          </div>
        </div>
        <div class="tasks completed">
          <h2>Completed tasks</h2>
          <div class="task">
            <h3>Task Name</h3>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut est quis libero blandit suscipit at iaculis leo. Nunc dapibus enim ac sem feugiat imperdiet. Suspendisse potenti. Mauris eu pellentesque diam. Sed nec nibh leo. Sed vulputate eu purus eget gravida. Phasellus pretium nisi interdum nunc vulputate feugiat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
