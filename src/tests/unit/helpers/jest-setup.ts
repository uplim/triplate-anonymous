import '@testing-library/jest-dom';
import failOnConsole from 'jest-fail-on-console';

failOnConsole({
  silenceMessage: (errorMessage) => {
    if (/Invalid value for prop `action` on <form> tag./.test(errorMessage)) {
      return true;
    }
    return false;
  },
});
