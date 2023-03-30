
import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TeacherProfile from './teacher/teacherProfile';
import StudentProfile from './student/studentProfile';
import AddStudent from './student/addStudent';
import Dashboard from './components/dashboard';
import AddTeacher from './teacher/addTeacher';
import NoPage from './components/noPage';
import ViewStudent from './student/viewStudent';
import ViewTeacher from './teacher/viewTeacher';
import EditStudentData from './student/editStudent';
import EditTeacherData from './teacher/editTeacher';


function App() {

  return (
    <div className="App">

      <Switch>

        <Route exact path='/'>
          <Dashboard />
        </Route>

        <Route path='/student&profile'>
          <StudentProfile />
        </Route>

        <Route path='/teacher&profile'>

          <TeacherProfile />

        </Route>

        <Route path='/add&student'>
          <AddStudent />
        </Route>

        <Route path='/add&teacher'>
          <AddTeacher />
        </Route>

        <Route path='/viewStudent&:id'>
          <ViewStudent />
        </Route>

        <Route path='/viewTeacher&:id'>
          <ViewTeacher />
        </Route>

        <Route path='/editStudent:id'>
          <EditStudentData />
        </Route>

        <Route path='/editTeacher:id'>
          <EditTeacherData />
        </Route>

        <Route path='**'>
          <NoPage />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
