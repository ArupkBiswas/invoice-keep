<template>
  <div @click="checkClick" ref="invoiceWrap" class="invoice-wrap flex flex-column">
        <form @submit.prevent="submitForm" class="invoice-content">
            <h1>User Registration</h1>
                      
            <!-- Bill Form -->
            <div class="bill-from flex flex-column">
                <h4>Person's Name</h4>
                <div class="location-details flex">
                    <div class="input flex flex-column">
                        <label for="firstName">First Name</label>
                        <input required type="text" id="billerCity" v-model="billerCity"/>
                    </div>
                    <div class="input flex flex-column">
                        <label for="middleName">Middle Name</label>
                        <input required type="text" id="billerZipCode" v-model="billerZipCode" />
                    </div>
                    <div class="input flex flex-column">
                        <label for="lastName">Last Name</label>
                        <input required type="text" id="billerCountry" v-model="billerCountry" />
                    </div>
                </div>

            </div>    
            
            <!-- Bill To -->
            <div class="bill-to flex flex-column">
                <h4>Person's Address</h4>
                <div class="input flex flex-column">
                    <label for="clientEmail">Email</label>
                    <input required type="text" id="clientEmail" v-model="clientEmail" />
                </div>
                <div class="input flex flex-column">
                    <label for="clientStreetAddress">Street Address</label>
                    <input required type="text" id="clientStreetAddress" v-model="clientStreetAddress" />
                </div>
                <div class="location-details flex">
                    <div class="input flex flex-column">
                        <label for="clientCity">City</label>
                        <input required type="text" id="clientCity" v-model="clientCity" />
                    </div>
                    <div class="input flex flex-column">
                        <label for="clientZipCode">Zip Code</label>
                        <input required type="text" id="clientZipCode" v-model="clientZipCode" />
                    </div>
                    <div class="input flex flex-column">
                        <label for="clientCountry">Country</label>
                        <input required type="text" id="clientCountry" v-model="clientCountry" />
                    </div>
                </div>
                <div class="input flex flex-column">
                    <label for="phoneNumber">Phone Number</label>
                        <input required type="text" id="phoneNumber" v-model="clientCountry" />
                </div>

                <h4>Person's Gender</h4>
                <div class="input flex">
                    <input type="radio" id="male" v-model="gender" value="male" name="gender"/> Male
                    <input type="radio" id="female" v-model="gender" value="female" name="gender"/> Female
                    <input type="radio" id="other" v-model="gender" value="other" name="gender"/> Other
                </div>

                <h4>Password</h4>
                <div class="input flex flex-column">
                    <label for="phoneNumber">Enter Password</label>
                        <input required type="text" id="phoneNumber" v-model="clientCountry" />
                </div>
                <div class="input flex flex-column">
                    <label for="phoneNumber">Confirm Password</label>
                        <input required type="text" id="phoneNumber" v-model="clientCountry" />
                </div>
            </div>

            <!-- Access Rights -->
            <h4>Access Rights</h4>
                <div class="access-rights flex">
                    <div class="input flex">
                        <input required type="radio" id="server" v-model="accessControl" value="server" name="accessControl"/> Server User
                        <input required type="radio" id="client" v-model="accessControl" value="client" name="accessControl"/> Client User
                    </div>
                </div>
            
            <!-- Save/Exit here -->
            <div class="save flex">
                <div class="left">
                    <button type="button" @click="backToLanding" class="red">Cancel</button>
                </div>
                <div class="right flex">
                    <button type="button" @click="backToLogin" class="dark-purple">Alrady Registered</button>
                    <button type="submit" @click="registerNewUser" class="purple">Register</button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
  export default {
    name: "Registration",

    data() {

    },

    methods: {
      backToLanding() {
        this.$router.push({ name: "Landing" });
      },

      backToLogin() {
        this.$router.push({ name: "Login" });
      },

      registerNewUser() {

      },
    },
  };
</script>

<style lang="scss" scoped>
  .invoice-wrap {
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
    background-color: #252945;
  }
  &::-webkit-scrollbar-thumb {
    background: #141625;
    border-radius: 50px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
    // @media (min-width: 900px) {
    //     left: 90px;

    // }

    .invoice-content {
        position: relative;
        padding: 56px;
        max-width: 700px;
        width: 100%;
        background-color: #141625;
        color: #fff;
        box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), -10px 4px 6px -1px rgba(0, 0, 0, 0.2) ;

        h1 {
            margin-bottom: 48px;
            color: #fff;
        }
        
        h3 {
            margin-bottom: 16px;
            font-size: 18px;
            color: #777f98;
        }

        h4 {
            color: #7c5dfa;
            font-size: 12px;
            margin-bottom: 24px;
        }

    }

    // -- Bill To --- Bill From --//
    .bill-to,
    .bill-from {
        margin-bottom: 48px;

        .location-details {
            gap: 16px;
            div {
                flex: 1;
            }
        }
    }

    // Invoice Work
    .access-rights {
        gap: 16px;
        div {
            flex: 1;
        }
    }

    .save {
        margin-top: 60px;

        div {
            flex: 1;
        }

        .right {
            justify-content: flex-end;
        }
    }

}

.input {
    margin-bottom: 24px;
}

label {
    font-size: 12px;
    margin-bottom: 6px;
}

input,
select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
        outline: none;
    }

}
</style>