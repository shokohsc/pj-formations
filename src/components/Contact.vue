<template>
  <div class="hero-body">
    <div class="container has-text-centered">
        <section class="section is-medium">
            <Form id="contact" @submit="onSubmit()" action="https://formspree.io/f/xpzvqgpe" method="POST">
            <div class="field">
                <label class="label has-text-white">Nom</label>
                <div class="control has-icons-left">
                    <Field class="input is-large" name="name" type="text" :rules="validateName" placeholder="Nom" />
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                </div>
                <ErrorMessage class="help is-danger" name="name" />
            </div>

            <div class="field">
                <label class="label has-text-white">Email</label>
                <div class="control has-icons-left">
                    <Field class="input is-large" name="email" type="email" :rules="validateEmail" placeholder="Email" />
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                </div>
                <ErrorMessage class="help is-danger" name="email" />
            </div>

            <div class="field">
                <label class="label has-text-white">Message</label>
                <div class="control">
                    <Field class="textarea is-large" name="message" as="textarea" :rules="validateMessage" placeholder="Message" />
                </div>
                <ErrorMessage class="help is-danger" name="message" />
            </div>

            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <button class="button is-link">Envoyer</button>
                </p>
            </div>
            </Form>
        </section>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';

const validateName = async(value) => {
    if (undefined === value || isEmpty(value))
      return 'This field is required'
    if (!isLength(value))
      return 'This field must not be empty'
    return true
}

const validateEmail = async(value) => {
    if (undefined === value || isEmpty(value))
      return 'This field is required'
    if (!isEmail(value))
      return 'This field must be a valid email'
    return true
}

const validateMessage = async(value) => {
    if (undefined === value || isEmpty(value))
      return 'This field is required'
    if (!isLength(value))
      return 'This field must not be empty'
    return true
}

const onSubmit = async (values) => {
  try {
    const form = document.getElementById("contact")
    const data = new FormData(form)
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
</style>
