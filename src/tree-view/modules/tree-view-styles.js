import { css } from "lit-element";

export const treeViewStyles = css`
ul,
li,
ol {
  list-style: none;
}
.container {
  width: 95%;
}

.parent {
  display: flex;
  flex-direction: column;
}

.parent li {
  display: flex;
  background: #4e94ab;
  padding: 3px;
  
}

.parent li a {
  text-decoration: none;
  padding: 10px;

  border-bottom: 1px solid white;
  border-left: 1px solid white;
  
  color: white;
}

.parent li a:hover {
  background: rgba(0,0,0,.3);
}

.hidden {
  display: none;
}

.presentation-data {
  width: 100%;
}
`;