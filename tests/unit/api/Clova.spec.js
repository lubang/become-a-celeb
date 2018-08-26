import { assert, expect } from 'chai';
import Clova from '@/api/Clova';

describe('Clova API', () => {
  it('verify celebrity with irene', () => {
    // Arrange
    const filepath = 'tests/unit/api/irene.png';
    const file = new File(['irene.png'], filepath, {
      type: 'image/png',
    });
    const reader = new window.FileReader();
    reader.onload = () => {
      // Act & Assert
      assert.equal(file.size, 321566);
      assert.equal(file.name, 'irene.png');

      return Clova.verifyCelebrity(file)
        .then((res) => {
          const expectRes = {
            info: {
              size: {
                width: 452,
                height: 592,
              },
              faceCount: 1,
            },
            faces: [
              {
                celebrity: {
                  value: '아이린',
                  confidence: 1,
                },
              },
            ],
          };
          expect(res).to.deep.equal(expectRes);
        })
        .catch((err) => {
          assert.throws(null, err);
        });
    };
    reader.readAsDataURL(file);
  });

  it('verify celebrity with wendy', () => {
    // Arrange
    const filepath = 'tests/unit/api/wendy.png';
    const file = new File(['irene.png'], filepath, {
      type: 'image/png',
    });
    const reader = new window.FileReader();
    reader.onload = () => {
      // Act & Assert
      assert.equal(file.size, 321566);
      assert.equal(file.name, 'wendy.png');

      return Clova.verifyCelebrity(file)
        .then((res) => {
          const expectRes = {
            info: {
              size: {
                width: 498,
                height: 592,
              },
              faceCount: 1,
            },
            faces: [
              {
                celebrity: {
                  value: '이은혜',
                  confidence: 0.394174,
                },
              },
            ],
          };
          expect(res).to.deep.equal(expectRes);
        })
        .catch((err) => {
          assert.throws(null, err);
        });
    };
    reader.readAsDataURL(file);
  });
});
