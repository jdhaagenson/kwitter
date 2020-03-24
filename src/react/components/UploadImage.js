// import React, { Component } from "react";
// import { connect } from "react-redux";


// class UploadImage extends Component {
//   handleUploadAvatarImage = e => {
//     const [file] = e.target.files;
//     if (file) {
//       const reader = new FileReader();
//       const { current } = uploadedImage;
//       current.file = file;
//       reader.onload = e => {
//         current.src = e.target.result;
//       };
//       reader.readAsDataURL(file);
//   };
//  }

//   render() {
//     return (
//         <form onClick={this.imageUploader.current.click()}>
//           <input floated="right" type="file" icon="file" name="picture" />
//           <input type="submit" value="Upload Picture" />
//         </form>
//     );
//   }
// }


// export default connect(UploadImage)
