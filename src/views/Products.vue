<template>
  <div>
    <Navbar />
    <div class="container">
      <h4 class="cont">Contact Us:</h4>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Fullname</label
        >
        <input
          type="username"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput3" class="form-label"
          >Phone number</label
        >
        <input
          type="phone"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="Phone"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput4" class="form-label"
          >Subject</label
        >
        <input
          type="subject"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Subject"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Message</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Message"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Products",
  components: {
    Navbar,
  },
};
</script>

<style>
.cont {
    font-size: 1.5rem;
    margin-top: 1rem;
}
</style>