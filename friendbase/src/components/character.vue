<template>
    <div class="">
        {{character}}
    </div>

</template>

<script>

export default {
    data() {
        return {
            character: {}
        }
    },
    methods: {
        fetchCharacter() {
      fetch('http://swapi.co/api/people/1',
      {
        mode: 'no-cors'
      },
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => console.log(json))
    },
    created() {
        this.fetchCharacter();
    }
    }
}
</script>