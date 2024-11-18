import { LightningElement, api } from 'lwc';
import { sum } from './sum';
  
export default class UnitTest extends LightningElement {
  @api unitNumber = sum(2,3);

  handleChange(event) {
    this.unitNumber = event.target.value;
  }
}

it('displays unit status with updated unitNumber', () => {
    const element = createElement('c-unit-test', {
     is: UnitTest
    });
    // Add the element to the jsdom instance
    document.body.appendChild(element);
    // Update unitNumber after element is appended
    element.unitNumber = 6
      
    const div = element.shadowRoot.querySelector('div');
    // Verify displayed unit status
    expect(div.textContent).toBe('Unit 6 alive!');
  });