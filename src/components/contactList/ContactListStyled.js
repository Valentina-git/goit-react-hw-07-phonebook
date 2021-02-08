import styled from 'styled-components';

const ContactListWrapper = styled.div`
  padding: 10px 0;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
  .myList-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .myList-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms;
  }
  .myList-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .myList-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms;
  }
`;

export default ContactListWrapper;
