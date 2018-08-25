<template>
  <div class="main">
  <b-row>
    <b-col>
      <!-- <div class="hello"> -->
        <div id="myMap"></div>
      <!-- </div> -->
    </b-col>
    <b-col>
      <h2>
        Add Incident
        <b-link href="#/IncidentList">(Incident List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Description">
          <b-form-input id="description" :state="state" v-model.trim="Incident.description"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Type">

                  <v-select v-model="selected" :options="['foo','bar']"></v-select>
          <!-- <b-form-input id="type" :state="state" v-model.trim="Incident.type"></b-form-input> -->
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Date">
                  <datepicker id="currentdate" :bootstrap-styling="true"
                            class="form-control"
                            :open-date="openDate"
                            :format="customFormatter"
                            v-model="event_at">
                </datepicker>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter location">
          <b-form-input id="location" :state="state" v-model.trim="Incident.location">{{ position }}</b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Image">
                <input type="file" name="image" accept="image/*">
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
  </div>
</template>

<script>
import axios from 'axios'
import Datepicker from 'vuejs-datepicker';
import moment from "moment";
import Vue from 'vue'
import vSelect from 'vue-select'
export default {
  name: 'main',
  components: {
       Datepicker,
   },
  data () {
    return {
      msg: '',
      event_at: '',
      openDate: new Date(),
      Incident: {},
       files: [],
       position:"position"
    }},
  mounted: function() {
    var map
    console.log("map: ", google.maps)
    if(navigator.geolocation){
      console.log(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function(position) {
            map = new google.maps.Map(document.getElementById('myMap'), {
              center: {lat:position.coords.latitude, lng:  position.coords.longitude},
              scrollwheel: false,
              zoom: 15
            })
            var marker = new google.maps.Marker({
              position: {lat:position.coords.latitude, lng:  position.coords.longitude},
              map: map,
              title: 'This is your current position',
              draggable: true
            });
      })
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/Incident`, this.Incident)
      .then(response => {
        this.$router.push({
          name: 'ShowIncident',
          params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    customFormatter(date) {
           return moment(date).format('D MMMM YYYY');
     },
     previewFiles() {
       this.files = this.$refs.myFiles.files
     }
  }

}
</script>
<style scoped>
    #myMap {
    height: 800px;
    width: 100%;
   }
</style>
