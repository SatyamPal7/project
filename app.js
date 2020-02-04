const store = document.getElementById('store')
store.addEventListener('click', st)

function st() {
  console.log("Button clicked")
  //personal details
  var candidate_Name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var fathername = document.getElementById("fname").value;
  var mothername = document.getElementById("mname").value;
  var nation = document.getElementById("nation").value;
  var category = document.getElementById("cate").value;
  var language1 = document.getElementById("lang").value;
  var language2 = document.getElementById("lang1").value;
  var gender = document.getElementById("gen").value;
  var employement = document.getElementById("employ").value;
  var disability = document.getElementById("pwd").value;
  var paper = document.getElementById("apply").value;
  var offer = document.getElementById("offer").value;
  var center = document.getElementById("center").value;
  var medium = document.getElementById("med").value;
  var durl = document.getElementById("doc").value;
  var status = document.getElementById("appear").value;
  var course = document.getElementById("course").value;
  var university = document.getElementById("board").value;
  var year = document.getElementById("year").value;
  var obtain = document.getElementById("obt").value;
  var total = document.getElementById("total").value;
  var per = document.getElementById("percent").value;


  // auth.createUserWithEmailAndPassword(email, password).then(cred => {
  //   console.log(cred)
  //   return db.collection('teacher').doc(cred.user.uid).set({
let data={
      candidate_Name:candidate_Name,
      Date_Of_Birth: date,
      Father_Name: fathername,
      Mother_Name: mothername,
      Nationality: nation,
      category:category,
      language: language1+' ,'+language2,
      Gender: gender,
      employement:employement,
      disability:disability,
      paper:paper,
      offer:offer,
      center:center,
      medium:medium,
      durl:durl,
      status:status,
      course:course,
      university:university,
      year:year,
      obtain:obtain,
      total:total,
      per:per,
    }



    // close the signup modal & reset form

    db.collection("teacher").add(data)
    .then(function() {
    console.log("Document successfully written!");
    window.location.href="Thankyou.html";
})
.catch(function(error) {
    console.error("Error writing document: ", +error);
});
  }
// }  .catch(err => {
//     console.log("Error adding user\n" + err)
//   });
// }
