const inp = document.getElementById('inp')
inp.addEventListener('click', writeData)

function writeData() {
  console.log("Button clicked")
  //personal details
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var date = document.getElementById("date").value;
  var fathername = document.getElementById("fname").value;
  var mothername = document.getElementById("mname").value;
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;
  var other = document.getElementById("other").value;

  //contact details
  var address=document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var pincode=document.getElementById("pincode").value;
  var email= document.getElementById("email").value;
  var mobile= document.getElementById("mob").value;

  //password
  var password = document.getElementById("password").value;


  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred)
    return db.collection('test').doc(cred.user.uid).set({

      candidate_Name: first+' '+last,
      Date_Of_Birth: date,
      Mother_Name:    mothername,
      Father_Name:    fathername,
      Gender:         male,
      Gender:         female,
      Gender:         other,
      Address:        address,
      City:           city,
      Pincode:        pincode,
      Email:          email,
      Mobile:         mobile,

    });
  }).then(ref => {
    // close the signup modal & reset form
    console.log("User added successfully with reference \n" + ref)
    db.collection("test").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });
  }).catch(err => {
    console.log("Error adding user\n" + err)
  });

}
