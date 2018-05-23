const expect = chai.expect;

describe('index.js', function () {
  describe('lowerCaseStudentNames()', function () {
    const students = [];

    beforeEach(function () {
      students.length = 0;

      students.push('Mary', 'Joan', 'Eva', 'Frida', 'Taylor', 'Agnes');
    });

    it('returns all students lowercased', function () {
      expect(lowerCaseStudentNames(students)).to.eql(['mary', 'joan', 'eva', 'frida', 'taylor', 'agnes']);
    });

    it('does not modify the original array', function () {
      lowerCaseStudentNames(students);

      expect(students).to.eql(['Mary', 'Joan', 'Eva', 'Frida', 'Taylor', 'Agnes']);
    });
  });

  describe('nameToAttributes()', function () {
    it('returns list of objects with appropriate first and last names', function () {
      const students = ['Mary Cassatt', 'Joan Mitchell', 'Eva Hesse', 'Frida Kahlo', 'Taylor Swift', 'Agnes Martin'];

      expect(nameToAttributes(students)).to.eql([
        { firstName: 'Mary',   lastName: 'Cassatt'     },
        { firstName: 'Joan',   lastName: 'Mitchell'   },
        { firstName: 'Eva',   lastName: 'Hesse'   },
        { firstName: 'Frida', lastName: 'Kahlo'    },
        { firstName: 'Taylor',   lastName: 'Swift' },
        { firstName: 'Agnes',   lastName: 'Martin'     }
      ]);
    });
  });

  describe('attributesToPhrase()', function () {
    it('converts to list saying the name and where each individual is from', function () {
      const students = [
        { name: 'Mary',   hometown: 'Allegheny'  },
        { name: 'Joan',   hometown: 'Chicago'    },
        { name: 'Eva',   hometown: 'Hamburg'   },
        { name: 'Frida', hometown: 'Coyoacán' },
        { name: 'Taylor',   hometown: 'Reading'   }
      ];

      expect(attributesToPhrase(students)).to.eql([
        'Mary is from Allegheny', 'Joan is from Chicago', 'Eva is from Hamburg', 'Frida is from Coyoacán', 'Taylor is from Reading'
      ]);
    });
  });
});
