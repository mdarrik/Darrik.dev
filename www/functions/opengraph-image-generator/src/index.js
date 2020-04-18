// Import lit-html functions
import { html, render } from 'lit-html';

const tagSVG = html`
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19L8 15.5L1 19V3Z"
      fill="#C6F6D5"
      fill-opacity="0.25"
      stroke="black"
      stroke-opacity="0.7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

// Define a template function
const openGraphImageCard = (title, tags, author) => {
  document.documentElement.style.setProperty('--title-font-size', '75px');
  return html`
    <style>
      :root {
        font-size: 36px;
        font-family: 'system-ui';
        --title-font-size: 24px;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      .root-div {
        width: calc(1200px / 1);
        height: calc(630px / 1);
        background-image: linear-gradient(
            92deg,
            rgba(168, 168, 168, 0.04) 0%,
            rgba(168, 168, 168, 0.04) 25%,
            rgba(92, 92, 92, 0.04) 25%,
            rgba(92, 92, 92, 0.04) 50%,
            rgba(25, 25, 25, 0.04) 50%,
            rgba(25, 25, 25, 0.04) 75%,
            rgba(50, 50, 50, 0.04) 75%,
            rgba(50, 50, 50, 0.04) 100%
          ),
          linear-gradient(
            255deg,
            rgba(139, 139, 139, 0.04) 0%,
            rgba(139, 139, 139, 0.04) 25%,
            rgba(204, 204, 204, 0.04) 25%,
            rgba(204, 204, 204, 0.04) 50%,
            rgba(211, 211, 211, 0.04) 50%,
            rgba(211, 211, 211, 0.04) 75%,
            rgba(65, 65, 65, 0.04) 75%,
            rgba(65, 65, 65, 0.04) 100%
          ),
          linear-gradient(
            331deg,
            rgba(21, 21, 21, 0.04) 0%,
            rgba(21, 21, 21, 0.04) 25%,
            rgba(63, 63, 63, 0.04) 25%,
            rgba(63, 63, 63, 0.04) 50%,
            rgba(243, 243, 243, 0.04) 50%,
            rgba(243, 243, 243, 0.04) 75%,
            rgba(191, 191, 191, 0.04) 75%,
            rgba(191, 191, 191, 0.04) 100%
          ),
          linear-gradient(
            199deg,
            rgba(165, 165, 165, 0.04) 0%,
            rgba(165, 165, 165, 0.04) 25%,
            rgba(236, 236, 236, 0.04) 25%,
            rgba(236, 236, 236, 0.04) 50%,
            rgba(102, 102, 102, 0.04) 50%,
            rgba(102, 102, 102, 0.04) 75%,
            rgba(159, 159, 159, 0.04) 75%,
            rgba(159, 159, 159, 0.04) 100%
          ),
          linear-gradient(
            302deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.04) 25%,
            rgba(7, 7, 7, 0.04) 25%,
            rgba(7, 7, 7, 0.04) 50%,
            rgba(249, 249, 249, 0.04) 50%,
            rgba(249, 249, 249, 0.04) 75%,
            rgba(199, 199, 199, 0.04) 75%,
            rgba(199, 199, 199, 0.04) 100%
          ),
          linear-gradient(90deg, rgb(41, 207, 59), rgb(94, 168, 92));
        display: flex;
        position: absolute;
      }
      .body-div {
        margin: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 9fr 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }
      h1 {
        grid-area: 1 / 1 / 2 / 3;
        font-size: var(--title-font-size);
        max-height: 80%;
        font-weight: bold;
        margin-top: 1ch;
      }
      .left-footer {
        margin-top: auto;
      }
      .tags {
        display: flex;
        list-style-type: none;
      }
      .tags > li {
        margin-right: 0.5rem;
      }
      .right-footer {
        text-align: right;
        margin-top: auto;
      }
    </style>
    <div class="root-div">
      <div class="body-div">
        <h1>${title}</h1>
        <div class="left-footer">
          <ul class="tags">
            ${tags.map(
              tag =>
                html`
                  <li>${tagSVG} <span class="tag-text">${tag}</span></li>
                `,
            )}
          </ul>
        </div>
        <div class="right-footer">${author}</div>
      </div>
    </div>
  `;
};

// Render the template with some data
const container =  document.getElementById("container")
render(
  myTemplate(
    window.title,
    window.tags,
    window.author
  ),
  container,
);
