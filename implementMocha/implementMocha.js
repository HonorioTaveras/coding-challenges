var describeCounter = 0;
var counter = 0;
var fail = 0;

function assert(bool) {
  if (!bool) {
    throw new Error('Failed');
  }
}

describe('Math', () => {
  it('can add', () => {
    assert(1 + 1 == 2);
  });

  it('will error here', () => {
    assert(1 + 1 == 3);
  });

  describe('my sub suite', () => {
    it('will have its own test', () => {});

    it('will have its own error here', () => {
      assert(1 + 1 == 4);
    });
  });

  it("will work agian", () => {
    assert(3 + 3 === 6);
  });
});

function indentStr(counter) {
  var str = "";

  for (let i = 0; i < counter; i += 1) {
    str += " ";
  }

  return str;
}

function describe(subject, callback) {
  describeCounter += 1;

  if (describeCounter > 1) {
  console.log(`\n${indentStr(describeCounter)}${subject}:`);
  callback();
  } else {
    console.log(`${subject}:`);
    callback();
  }
}

function it(testName, callback) {
  counter += 1;

  if (describeCounter > 1) {
    try {
      callback();
      console.log(`  ${indentStr(describeCounter)}${testName} [ok]`);
    } catch (err) {
      fail += 1;
      console.log(`  ${indentStr(describeCounter)}${testName} [err]`);
    }
  } else {
    try {
      callback();
      console.log(`  ${testName} [ok]`);
    } catch (err) {
      fail += 1;
      console.log(`  ${testName} [err]`);
    }
  }
}

console.log(`\n${counter} tests total`);
console.log(`${fail} of ${counter} tests failed`);
