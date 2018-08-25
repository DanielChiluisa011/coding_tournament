<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Incident List
        <b-link href="#/add-Incident">(Add Incident)</b-link>
      </h2>
      <b-table striped hover :items="Incidents" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'IncidentList',
  data () {
    return {
      fields: {
        description: { label: 'Description', sortable: true, 'class': 'text-center' },
        type: { label: 'Incident Type', sortable: true },
        date_and_time: { label: 'date', 'class': 'text-center' },
        location: { label: 'location', 'class': 'text-center' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      Incidents: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/Incident`)
    .then(response => {
      this.Incidents = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (Incident) {
      this.$router.push({
        name: 'ShowIncident',
        params: { id: Incident._id }
      })
    }
  }
}
</script>
