<template>
    <form @submit.prevent="handleSubmit">
        <div v-if="message" class="alert alert-success" role="alert">
             {{message}}
         </div> 

         <error v-if="error" :error="error"/>   

        <h3>Register Here!</h3>

         <!-- <div class="form-group">
            <label>ain</label>
            <input type="text" class="form-control" v-model="ain" placeholder="AIN">
        </div> -->

        <div class="form-group">
            <label>First Name</label>
            <input type="text" name="fname" required class="form-control" v-model="firstName" placeholder="First Name">
        </div>

        <div class="form-group">
            <label>SurName</label>
            <input type="text" name="fname" required class="form-control" v-model="surName" placeholder="SurName">
        </div>

        <div class="form-group">
            <label>Phone Number</label>
            <input type="number" name="fname" required class="form-control" v-model="phoneNumber" placeholder="Phone Number">
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" name="fname" required class="form-control" v-model="email" placeholder="Email">
        </div>

        <div class="form-group">
            <label>Cover Letter</label>
            <textarea
                    id="cover_letter"
                    rows="5"
                    class="form-control" name="fname" required 
                    v-model="coverLetter" placeholder="Cover Letter"></textarea>
        </div>

        <div class="form-group">
        <label class="btn btn-default">
            <input type="file" name="fname" required ref="file" @change="selectImage" />
            <button  v-if="!isHidden" type="button" class="btn btn-primary" @click="upload('image', $event, isHidden = true)">Upload Image</button>
        </label>
        </div>

        <div class="form-group">
        <label class="btn btn-default">
            <input type="file" name="fname" required ref="file" @change="selectResume" />
            <button v-if="!isHidden" type="button" class="btn btn-primary" @click="upload('resume', $event), isHidden =  true">Upload Resume</button>
        </label>
        </div>

        <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>

</template>

<script>

import axios from 'axios'
import Error from './Error.vue'
import {uploadToCloudinary} from '../api'

let imageUrl;
let resumeUrl;
export default {
      name: 'Register',
        components: {
        Error
    },
    data() {
        return {
            // ain: '',
            first_name: '',
            sur_name: '',
            phone_number: '',
            email: '',
            cover_letter: '',
            message: '',
            error: '',
            image: '',
            resume: '',
            imageUrl: '',
            resumeUrl: ''
            
        }
    },

    methods: {
        async handleSubmit(){
            try{
                console.log(imageUrl);
                await axios.post('applicants', {
                    // ain: this.ain,
                    firstName: this.firstName,
                    surName: this.surName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    coverLetter: this.coverLetter,
                    image: imageUrl,
                    resume: resumeUrl
                });
                this.message = 'Your application has been submited succesfully!';
                this.error = ''; 

                setTimeout(function(){ alert("Your application has been submited succesfully!"); }, 2000);
                

                 this.$router.push('/'); 
                  
            } catch (e) {
                this.error = "Error occurred; all field most be filled!";
                this.message = '';
                
            }
           
        },
        selectImage (e) {
            const [file] = e.target.files
            this.image = file
        },
        
        async upload (file_type, event) {
            console.log(event);
            console.log(this.image)
            event.target.innerHTML = "Loading...";
            event.target.disabled = true;

            if(file_type === 'image'){
              let response = uploadToCloudinary(this.image)
              if(response){
                response.then(data => {
                    
                    event.target.innerHTML = "Upload Image";
                    event.target.disabled = false;
                    imageUrl = data.data.url
                    console.log(imageUrl)

                });

              }
                
            }
            
            else if(file_type === 'resume'){
                let response = uploadToCloudinary(this.resume)
                if(response){
                    response.then(data => {
                    event.target.innerHTML = "Upload Resume";
                    event.target.disabled = false;
                        resumeUrl = data.data.url
                        console.log(resumeUrl)

                    })
                }
            }
            
            // this[file_type] = url
        },

        selectResume (e) {
            const [file] = e.target.files
            this.resume = file
        }
        
    }   

}
</script>
