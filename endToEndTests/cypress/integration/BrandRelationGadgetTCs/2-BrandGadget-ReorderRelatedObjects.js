const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const anyGadgetUtils = require('../../utils/anyGadgetUtils');
const browserGadgetUtils = require('../../utils/browserGadgetUtils');

describe('Brand Relation Gadgets - Re-order MenuItem', function () {
    const multiInstance = '#check-idx_1190';
    const reverse = '#ws-reorderDialog-reverse';
    const topBtn = '#ws-reorderDialog-toTop';
    const bottomBtn = '#ws-reorderDialog-toBottom';

    it('TC12-Check the check-box of multi-instance and click on Re-order menu item',function(){
       
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  
   
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
 
        loginUtils.logoutFromAMI();
        cy.wait(100);
     });
     it('TC13-Click on cancel button to close the Re-order window',function(){
       
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  
   
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
 
        cy.get('#ws-dialog-cancel').click();
        loginUtils.logoutFromAMI();
        cy.wait(100);
     });
    it('TC14:click on Reverse button without selecting child object to reverse the objects',function(){
       const testQAfolder = '#2735-22232';

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  
   
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
        cy.get(testQAfolder).click();
 
        cy.get(reverse).click();

        loginUtils.logoutFromAMI();
        cy.wait(100);
       
    });

    it('TC15:click on Reverse button by selecting any one child object to reverse the objects',function(){
        const bangQafolder = '#1797-21722';
        
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  
   
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
        cy.get(bangQafolder).click();
        cy.get(bottomBtn).should('be.visible');
 
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
    it('TC16: click on Reverse button by selecting any two or more child objects to reverse the objects',function(){
        const evilfolder = '#2735-18244';
        const testQAfolder = '#2735-22232';  
 
         loginUtils.loginToAMI('cypress1');
         changeDropdownUtils.changeWorkspace('QA Relations With Browse');
         anyGadgetUtils.openGadgetOrGroup('Browse');
         browserGadgetUtils.setStructureType('Brands');
         browserGadgetUtils.setBrowseContext('Cypress', false);
         browserGadgetUtils.setStructureType('!0EggVendorParent');  
         anyGadgetUtils.openGadgetOrGroup('Brand Relations');
         cy.get(multiInstance).check();  
    
         const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
         thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
         cy.get(testQAfolder).click();
         cy.wait(500);
         cy.get(evilfolder).click();
  
         cy.get(reverse).click();
 
         loginUtils.logoutFromAMI();
         cy.wait(100);
     });
    it('TC17:Select the top child object to enable Move-to-Bottom button',function(){
        const testQAfolder = '#2735-22232';

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  

    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
    thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
    cy.get(testQAfolder).click();
    cy.get(topBtn).should('be.visible');

    loginUtils.logoutFromAMI();
    cy.wait(100);
});
    it('TC18:select the bottom child object to enable Move-to-Top button',function(){
        const testQAfolder = '#2735-22232';

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  
    
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
        
        cy.get(testQAfolder).click();
        cy.get(topBtn).should('be.visible');
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
    it('TC19:Select the middle child object to enable both Move-to-Top and Move-to-Bottom buttons',function(){
        const evilfolder = '#2735-2737';

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  
    
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
        
        cy.get(evilfolder).click();
        cy.get(topBtn).should('be.visible');
        cy.get(bottomBtn).should('be.visible');
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
    it('TC20:select one or more child objects and click on Ok button to save the changes.',function(){
        const bangfolder = '#1797-21722';

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(multiInstance).check();  
    
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
        
        cy.get(bangfolder).click();
        cy.get(topBtn).click();
        cy.get('#ws-dialog-submit').click();
    
        loginUtils.logoutFromAMI();
    });
});