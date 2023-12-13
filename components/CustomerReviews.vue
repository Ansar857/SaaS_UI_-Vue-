<template>

    <div  class="tw-bg-teal-900 tw-py-20 tw-space-y-24 tw-mt-10 tw-mb-10">
        <div class="tw-flex tw-flex-col  tw-text-center tw-justify-center tw-self-center tw-items-center ">
            <h1 class="tw-font-bold tw-text-3xl tw-text-white">Real People, Real Results.</h1>
            <h1 class="tw-font-bold tw-text-3xl tw-text-white">Hear It From Our Customer</h1>
        </div>

        <div class="tw-container tw-flex tw-justify-around tw-flex-wrap">
          <div class="team-profile">
            <img
              src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
              class="team-img"
            />
            <div class="profile-details">
              <h3 class="tw-text-white">Alexa Kardi</h3>
              <p class="tw-text-slate-400">Founder and CEO</p>
            </div>
          </div>
          <div class="team-profile">
            <img
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
              class="team-img"
            />
            <div class="profile-details">
              <h3 class="tw-text-white">Tavell Monroe</h3>
              <p class="tw-text-slate-400">Web Developer</p>
            </div>
          </div>
          <div class="team-profile">
            <img
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
              class="team-img"
            />
            <div class="profile-details">
              <h3 class="tw-text-white">Adale Smith</h3>
              <p class="tw-text-slate-400">Marketing Specialist</p>
            </div>
          </div>
          <div class="team-profile">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
              class="team-img"
            />
            <div class="profile-details">
              <h3 class="tw-text-white">Thomas Mason</h3>
              <p class="tw-text-slate-400">UX Designer</p>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    width: auto;
    max-width: none;
    margin: 14px;
  }
  
  .team-profile {
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .team-profile img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
    object-position: top;
  }
  
  .profile-details {
    margin-top: 1rem;
  }
  
  .team-profile h3 {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .team-profile p {
    font-size: 0.875rem;
    /* color: #4b5563; text-gray-600 in Tailwind */
  }
  </style>
  