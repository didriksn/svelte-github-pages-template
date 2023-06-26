<script>
  let process;
  let msg = "";
  $: msgLength = msg.split("").length;
  
  async function handleSubmit() {
    const response = await fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ msg }),
    });
    
    if (response.ok) {
      console.log('Message stored successfully');
      msg = "";
      process = "Successfully submitted to the pool!"
    } else {
      console.error('Failed to store message');
      process = "Failed to submit"
    }
  }
  
  
  
  
  import { onMount } from 'svelte';
  
  let pool = [];
  
  onMount(async () => {
    const response = await fetch('http://localhost:3000/messages');
    if (response.ok) {
      const data = await response.json();
      pool = data.messages;
    }
  });
  
  
  let randomIndex = Math.floor(Math.random() * pool.length);
  function generateNew() {
    randomIndex = Math.floor(Math.random() * pool.length);
  }
</script>

<body>
  <div class="form">
    <textarea class="write" id="write" placeholder="What's on your mind?" bind:value={msg}></textarea>
    <div class="text-related">
      <div class="process">{process !== undefined ? process : ""}</div>
      {#if msgLength < 4}
        <button class="not-submit" disabled>Submit<br></button>
      {:else}
        <button class="submit" on:click={handleSubmit}>Submit</button>
      {/if}
      <p class="char">(Message must be more than three characters long)</p>
    </div>
  </div>
  <div class="display" id="display">{pool[randomIndex]}<button class="gen-new" on:click={generateNew}>Generate new message {randomIndex}</button></div>
</body>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

/* 
  body {
    background-color: #050a08;
    display: flex;
    /* height: 100vh;
    width: 100vw; */
    /* flex-direction: row; */
        /* align-items: center; */
  /* } */ 

  .form {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .write {
    width: 70vw;
    font-family: 'Roboto Mono', monospace;
    height: 25vh;
    resize: none;
    background-color: #050a08;
    border: 1px none #232423;
    border-radius: 5px;
    color: #e1efe8;
    font-size: large;
    outline: none;
    /* text-align: center; */
  }

  .text-related {
    display: flex;
    flex-direction: column;
    transform: translate(0, 10%);
  }

  .process {
    color: #70b291;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    transform: translate(0, -20px);
  }

  .not-submit {
    margin-left: auto;
    margin-right: auto;
    width: 20vw;
    font-family: 'Roboto Mono', monospace;
    height: 15vh;
    border-radius: 20px;
    border: none;
    background-color: gray;
    font-size: x-large;
  }

  .submit {
    margin-left: auto;
    margin-right: auto;
    width: 20vw;
    font-family: 'Roboto Mono', monospace;
    height: 15vh;
    border-radius: 20px;
    border: none;
    background-color: #60a985;
    font-size: x-large;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }

  .submit:hover {
    background-color: #70b291;
    transform: translate(0, -2px);
    box-shadow: 0 10px 50px #325041;
  }

  .submit:active {
    background-color: #60a985;
    box-shadow: inset 0 -5px 10px black;
  }

  .char {
    color: #70b291;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-size: small;
    /* transform: translate(0, -20px); */
  }

  .display {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -27%);
    height: 65vh;
    width: 99%;
    border-radius: 20px;
    border: 5px solid #70b291;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
    color: #e1efe8;
    background-color: black;
    box-shadow: 0px 0 10px #70b291;
    padding-left: 10px;
    overflow: auto;
    word-wrap: break-word;
  }
  
  .gen-new {
    position: absolute;
    top: 1.5%;
    right: 0.5%;
    background-color: #60a985;
    font-family: 'Roboto Mono', monospace;
    border-radius: 20px;
    border: none;
    width: 10vw;
    height: 5vh;
    cursor: pointer;
  }

  .gen-new:active {
    background-color: #60a985;
    box-shadow: inset 0 -1px 5px black;
  }

  </style>