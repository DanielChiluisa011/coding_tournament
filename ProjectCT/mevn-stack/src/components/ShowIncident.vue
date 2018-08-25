<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Incident
        <b-link href="#/">(Incident List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{Incident.title}}
        </template>
        <template slot="lead">
          description: {{Incident.description}}<br>
          type: {{Incident.type}}<br>
          date_and_time: {{Incident.date_and_time}}<br>
          location: {{Incident.location}}<br>
          image: {{Incident.image}}<br>
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{Incident.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editIncident(Incident._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteIncident(Incident._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowIncident',
  data () {
    return {
      Incident: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/Incident/` + this.$route.params.id)
    .then(response => {
      this.Incident = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    editIncident (Incidentid) {
      this.$router.push({
        name: 'EditIncident',
        params: { id: Incidentid }
      })
    },
    deleteIncident (Incidentid) {
      axios.delete('http://localhost:3000/Incident/' + Incidentid)
      .then((result) => {
        this.$router.push({
          name: 'IncidentList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
