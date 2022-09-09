<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5"></div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="wrapper">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <div class="contact-wrap w-100 p-md-5 p-4">
                  <h3>Contact us</h3>
                  <p class="mb-4">
                    We're open for any suggestion or just to have a chat
                  </p>
                  <div id="form-message-warning" class="mb-4"></div>
                  <div id="form-message-success" class="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-8">
                      <div class="dbox w-100 d-flex align-items-start">
                        <div class="text">
                          <p>
                            <span>Address:</span>
                            Komp. Ruko Mangga Dua Blok B-6 No. 9 Jl. Jagir
                            Wonokromo No. 100, 60244 Surabaya - Indonesia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="dbox w-100 d-flex align-items-start">
                        <div class="text">
                          <p>
                            <span>Phone:</span>
                            <a>+62 31 99855123</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form class="form" ref="form" @submit.prevent="sendMail">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="name"
                            type="text"
                            name="from_name"
                            placeholder="Full Name"
                            :value="inputFieldReset"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            :value="inputFieldReset"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            :value="inputFieldReset"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="4"
                            name="message"
                            placeholder="Your Message"
                            :value="inputFieldReset"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="submit"
                            name="send"
                            value="Send Message"
                            class="btn btn-primary"
                          />
                          <div class="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="w-100 social-media mt-5">
                    <h3>Follow us here</h3>
                    <p>
                      <a href="#">Facebook</a>
                      <a href="#">Twitter</a>
                      <a href="#">Instagram</a>
                      <a href="#">Dribbble</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-stretch">
                <div
                  class="info-wrap w-100 p-5 img"
                  style="
                    background-image: url(https://preview.colorlib.com/theme/bootstrap/contact-form-05/images/ximg.jpg.pagespeed.ic.3SzfPzu4gg.webp);
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import emailjs from "emailjs-com";
import { ref } from "vue";

export default {
  name: "ContactUs",
  components: {
    Navbar,
  },
  setup() {
    const form = ref(null);
    const inputFieldReset = ref(null);

    const sendMail = () => {
      emailjs
        .sendForm(
          "service_tdn8f19",
          "template_whoprf9",
          form.value,
          "Rhy5myuE2rY-iyfbT"
        )
        .then(
          () => {
            alert("Message sent!");
            inputFieldReset.value = " ";
          },
          (error) => {
            alert("Message not sent", error);
          }
        );
    };
    return {
      form,
      inputFieldReset,
      sendMail,
    };
  },
};
</script>

<style>

</style>