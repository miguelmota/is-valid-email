# is-valid-email

Validate email address

# Install

```bash
npm install is-valid-email
```

```bash
bower install is-valid-email
```

# Usage

```javascript
var isValidEmail = require('is-valid-email');

isValidEmail('foo.bar-5@qux.com') // true
isValidEmail('foo+bar-5@qux.com') // true
isValidEmail('foo&bar-5@qux.com') // true
isValidEmail('foo...bar-5@qux.com') // false
isValidEmail('fooqux.com') // false
```

# License

MIT
