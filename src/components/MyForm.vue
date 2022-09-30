<template>
  <div class="form">
    <div class="form__element-wrap">
      <div 
        class="form__element"
        :class="errors.name !== '' ? 'error' : ''"
      >
        <label for="name">Name</label>
        <input 
          v-model="form.name"
          type="text"
          id="name"
          name="name"
          @blur="checkValue('name', $event)"
        />
      </div>
      <p v-if="errors.name !== ''" class="form__error">{{errors.name}}</p>      
    </div>

    <div class="form__element-wrap">
      <div 
        class="form__element"
        :class="errors.area !== '' ? 'error' : ''"
      >
        <label for="area">Area</label>
        <input 
          v-model="form.area"
          type="text"
          id="area"
          name="area"
          @blur="checkValue('area', $event)"
        />
      </div>
      <p v-if="errors.area !== ''" class="form__error">{{errors.area}}</p>
    </div>

    <div class="form__element-wrap">
      <div 
        class="form__element"
        :class="errors.location !== '' ? 'error' : ''"
      >
        <label for="location">Location</label>
        <input 
          v-model="form.location"
          type="text"
          id="location"
          name="location"
        />
      </div>
      <p v-if="errors.location !== ''" class="form__error">{{errors.location}}</p>
    </div>

    <div class="form__element-wrap">
      <div 
        class="form__element"
        :class="errors.img !== '' ? 'error' : ''"
      >
        <label for="img">Image</label>
        <input 
          v-model="form.img"
          type="text"
          id="img"
          name="img"
        />
      </div>
      <p v-if="errors.img !== ''" class="form__error">{{errors.img}}</p>
    </div>

    <div class="form__btn-wrap">
      <template v-if="isEdit">
        <button id="SaveForm" @click="editRow">Edit</button>
      </template>
      <template v-else>
        <button id="SaveForm" @click="addRow">Save</button>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyForm",
    props:{
      isEdit: {
        type: Boolean,
        default: false,
      },
      incomeForm: {
        type: Object,
        default: {},
      }
    },
    data() {
      return {
        isValid: true,
        form: {
          id: null,
          name: null,
          area: null,
          location: null,
          img: null,
        },
        errors: {
          name: "",
          area: "",
          location: "",
          img: "",
        },
      }
    },
    emits: ['saveForm', 'editForm'],
    methods: {
      checkValue (key, e) {

        let val = e.target.value;

        if (val === undefined || val === "" || val === null) {
          this.errors[key] = "this field is requared";
          this.isValid = false;
        }

        this.isValid=true;
      },

      validate () {
        const requaredElements = {
          name: true,
          area: true,
          location: false,
          img: false,
        };

        Object.keys(this.errors).map((el) => {
          this.errors[el] = "";
        })

        Object.keys(this.form).forEach((el) => {
          if (requaredElements[el]) {
            if (this.form[el] === null || this.form[el] === "" || this.form[el] === undefined) {
              this.errors[el] = "this field is requared";
              this.isValid = false;
            }
          }
        })
      },

      setFormData() {
        if (Object.keys(this.incomeForm).length > 0) {
          Object.keys(this.incomeForm).forEach((el) => {
            this.form[el] = this.incomeForm[el];
          })
        }
      },

      addRow () {
        this.validate();

        if (this.isValid) {
          this.$emit('saveForm', this.form);
        }
      },

      editRow() {
        this.validate();

        if (this.isValid) {
          this.$emit('editForm', this.form);
        }
      }
    },
    mounted() {
      if(this.isEdit) {
        this.setFormData();
      }
    }
  }
</script>