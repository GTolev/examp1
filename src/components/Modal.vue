<template>
  <div class="modal">
    <div class="modal-overlay"></div>

    <div class="modal-wrapper">
      <div class="modal-close">
        <button id="cloce-modal" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="10.652" height="10.652" viewBox="0 0 10.652 10.652">
            <g transform="translate(-187.707 -35.849)">
              <line fill="none" stroke="#294170" stroke-linecap="round" stroke-width="1.2px" x2="12.664"
                    transform="translate(188.556 36.698) rotate(45)"/>
              <line fill="none" stroke="#294170" stroke-linecap="round" stroke-width="1.2px" y2="12.664"
                    transform="translate(197.511 36.698) rotate(45)"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="modal-title">{{modalTitle}}</div>

      <div class="modal-body">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      modalTitle: {
        type: String,
        default: "",        
      }
    },
    data() {
      return {

      }
    },
    emits: ['closeModal'],
    methods: {
      closeModal() {
        this.$emit('closeModal', true);
      }
    }
  }
</script>