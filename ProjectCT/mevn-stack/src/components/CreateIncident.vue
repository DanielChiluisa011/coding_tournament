<template>
  <b-row>
    <b-col cols="12">
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
          <b-form-input id="type" :state="state" v-model.trim="Incident.type"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Date">
                  <datepicker :bootstrap-styling="true"
                            class="form-control"
                            :open-date="openDate"
                            :format="customFormatter"
                            v-model="event_at">
                </datepicker>
          <!-- <b-form-input id="datetime" :state="state" v-model.trim="Incident.date_and_time"></b-form-input> -->
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter location">
          <b-form-input id="location" :state="state" v-model.trim="Incident.location"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Image">
          <b-form-input id="image" :state="state" v-model.trim="Incident.image"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'
import Datepicker from 'vuejs-datepicker';
import moment from "moment";
export default {
  name: 'CreateIncident',
  components: {
       Datepicker,
   },
  data () {
    return {
      event_at: '',
      openDate: new Date(),
      Incident: {}
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
  }
}
</script>
