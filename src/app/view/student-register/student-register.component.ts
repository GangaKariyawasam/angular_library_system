import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration/registration.component';
import {studentList}from '../../model/Student'
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {

  dataSource = new MatTableDataSource<studentList>(showStudents);
  displayedColumns: string[] = ['RegNo', 'Image', 'Name', 'Gender', 'Grade', 'Address', 'Contact', 'Edit'];
  applyFilterByRegisterNumber(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    showStudents.length = 0;
    for (const student of allStudents) {
      if(student.registrationNo.trim().toLowerCase().includes(filterValue.trim().toLowerCase())){
        showStudents.push(student);
      }
    }
    this.studentCount = showStudents.length;
    this.dataSource = new MatTableDataSource<studentList>(showStudents);
  }
  applyFilterByStudentName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    showStudents.length = 0;
    for (const student of allStudents) {
      if(student.initial.trim().toLowerCase().includes(filterValue.trim().toLowerCase()) ||
        student.fname.trim().toLowerCase().includes(filterValue.trim().toLowerCase()) ||
        student.lname.trim().toLowerCase().includes(filterValue.trim().toLowerCase())){
        showStudents.push(student);
      }
    }
    this.dataSource = new MatTableDataSource<studentList>(showStudents);
  }

  @ViewChild(MatPaginator) paginator: any;
  // @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
   /* this.dataSource.paginator = this.paginator;*/
    // this.dataSource.sort = this.sort;
  }

  pageIndex: number = 0;
  pageSize: number = 10;
  studentCount = 0;
  show = true;
  hide: any = true;
  courses: Course[] = [];
  selectedCourse: any;
  selectedSection = 'A';
  sections: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  selectedCourseList: Course[] = [];
  student = {regNo:'', fName: '', lName: '', streetNo: '', firstStreet: '', secondStreet: '', town: '', telephone: ''}
  form!: FormGroup;
  submitted = false;
  selectedStudent!: studentList;
  selectedRow = 0;
  isFloatingButtonClicked = false;
  buttonCount = 0;

  constructor(private fb: FormBuilder,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.courses.push({id:1, name:'Diploma in Java', duration:'4 months'});
    this.courses.push({id:2, name:'Diploma in Angular', duration:'4 months'});
    this.courses.push({id:3, name:'Diploma in Node js', duration:'4 months'});
    this.courses.push({id:4, name:'Diploma in Spring', duration:'4 months'});

    this.form = this.fb.group({
      fName:['',Validators.required, Validators.minLength(3)],
      /*lName:[Validators.minLength(3)],*/
    });
    for (let i = 1; i < 1000; i++) {
      allStudents.push({registrationNo: i.toString(), image: 'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg',initial: 'KP', fname: 'ganga',lname: 'Kariyawasam', gender: 'female',grade: 13,section: 'A', streetNumber: 'no1', firstStreet: '1stlane', secondStreet: 'Kodagoda', town: 'Imaduwa', contact: '0714297588',parents: 'Kumudini' , year: '2021'})
    }
    this.getTableData(this.pageIndex,this.pageSize);
    this.studentCount = allStudents.length;
  }
  getTableData(pageIndex: number, pageSize:number): void{
    let startPoint = (pageIndex*pageSize);
    let endPoint = startPoint+pageSize;
    let selectedData = allStudents.slice(startPoint,endPoint);
    showStudents.length = 0;
    for (const data of selectedData) {
      showStudents.push(data);
    }
  }
  get registerFormControl(){
    return this.form.controls;
  }
  test(): void {
    alert(this.selectedCourse);
  }

  deleteProfileImage(): void {
    alert('Delete profile image');
  }

  editProfilePhoto(): void {
    alert('Edit profile image');
  }

  getSection(): void {
    alert(this.selectedSection);
  }

  addToCourseList() {
    if(this.selectedCourse === undefined){
      alert('Please first select the course you want to add');
      return;
    }
    this.selectedCourseList.push(this.selectedCourse);
    const index = this.courses.indexOf(this.selectedCourse,0);
    if(index > -1){
      this.courses.splice(index,1);
      this.selectedCourse = undefined;
    }

}
  submitFormData(): void {
    if(this.form.valid){
      alert("Submitted form data");
    }
  }
  openRegisterForm(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegistrationComponent,dialogConfig);
  }

  changePage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getTableData(this.pageIndex,this.pageSize);
    this.dataSource = new MatTableDataSource<studentList>(showStudents);
  }

  getSelectedStudent(student: studentList): void{
    this.selectedStudent = student;
    this.selectedRow = +student.registrationNo;
    alert(JSON.stringify(student));
  }

  floatingIconClick() {
    this.isFloatingButtonClicked = true
    if(this.buttonCount == 0){
      this.buttonCount = 1;
    }else {
      this.buttonCount = 0;
    }
  }

  deleteRow() {
    alert('Delete '+this.selectedStudent.registrationNo);
  }

  editRow() {
    alert('Edit '+this.selectedStudent.registrationNo);
  }

  addRow() {
    alert('Add row');
  }
}
export interface Course{
  id: number,
  name: string,
  duration: string
}
const allStudents: studentList[] = [
];
const showStudents: studentList[] = [
];

