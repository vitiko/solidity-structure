const expect = require('chai').expect;
const SolidityStructure = require('../index');

describe('Test contract with function', function () {

  it('function', function () {


    let structure = SolidityStructure.parseFile(__dirname + '/fixture/HasFunction.sol');


    expect(structure.toJSON().constantFunctions).to.deep.equal(
      {
        getSomeInfo: {
          name: 'getSomeInfo',
          title: 'Get information about something',
          description: '',

          params: {
            someAddress: {
              description: 'address of something',
              name: 'someAddress',
              type: 'address',
              typeHint: null
            }
          },
          paramsSeq: [
            'someAddress'
          ],

          returns: {
            createdAt: {
              description: 'create date time of something',
              type: 'uint',
              typeHint: 'DateTime'
            },
            description: {
              description: 'Some description',
              type: 'string',
              typeHint: null
            },
            uri: {
              description: 'Uri of something',
              type: 'string',
              typeHint: 'HttpUri',
            }
          },

          returnsSeq: [
            'uri',
            'description',
            'createdAt'
          ]

        },


        isSomethingOk: {
          title: 'Function test is something is ok',
          description: '',
          name: 'isSomethingOk',
          params: {
            someStaff: {
              description: 'Some argument description',
              name: 'someStaff',
              type: 'bytes',
              typeHint: null
            }
          },
          paramsSeq: [
            'someStaff'
          ],
          returns: {
            isOk: {
              type: 'bool',
              description: 'Is something is ok',
              typeHint: null
            }

          },

          returnsSeq: [
            'isOk'
          ],

        },

        noAnnotationInThisFunction: {
          description: '',
          name: 'noAnnotationInThisFunction',
          params: {
            argA: {
              name: 'argA',
              type: 'bytes'
            },
            argB: {
              name: 'argB',
              type: 'string'
            }
          },

          paramsSeq: [
            'argA',
            'argB'
          ],
          returns: {
            returnA: {
              'type': 'address'
            },
            returnB: {
              'type': 'uint'
            }
          },
          returnsSeq: [
            'returnA', 'returnB'
          ],
          title: 'noAnnotationInThisFunction'
        },

      });
  });


});