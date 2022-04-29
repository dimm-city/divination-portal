
  <style>
   
    .form-container {
      min-width: min(600px, 80vw);
      min-height: min(500px, 90vh);
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 2rem;
      --aug-inlay-bg: #000000a8;
    }
  </style>
  

    <div
      class="form-container"
      data-augmented-ui="tl-scoop tr-scoop br-scoop bl-scoop both">
      <slot></slot>
    </div>
  