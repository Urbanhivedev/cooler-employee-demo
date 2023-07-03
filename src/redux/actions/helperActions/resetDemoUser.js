import { db, fb, auth, storage } from '../../../config/firebase';


const resetDemoUser = (identity) => {
   
    db.collection("transactions")
    .where('userID', '==', identity)
    .get().then(

      function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
        })}
     )

     db.collection("inbox")
    .where('id', '==', identity)
    .get().then(

      function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
        })}
     )


    db.collection('groups').
    where('members', 'array-contains',
    identity).get()
    .then((snapshot) => {
      const groupMembers = snapshot.docs.map((doc) => ({ id:doc.id,...doc.data()}));
      
      if (groupMembers.length) {
       
     groupMembers.forEach((item)=>{

      const updatedMembers = item.members.filter((demo)=>( demo !== identity))
      console.log("the ID has been removed!",updatedMembers)

      db.collection('groups')
      .doc(item.id)
      .update({
       members:updatedMembers
      })
        
     })


        console.log('groupMembers Data:', groupMembers);
      
      } else {
        
        console.log('THIS USER IS NOT IN ANY GROUPS!');
      }
    })
    .catch((error) => {
      console.log('Error in clearing the user from all groups it is part of:', error);
    });



   db.collection('employees')
   .doc(identity)
   .update({
     walletBalance: 1000,
     accruedBalance:0,
     coolers: [],
   })
  

}




export default resetDemoUser