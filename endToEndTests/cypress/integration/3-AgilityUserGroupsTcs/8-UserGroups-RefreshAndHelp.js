const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Refresh And Help In The UserGroups MenuItem', function () {
    it('TC42-Click on Action menu and then click on Refresh menu item to refresh the page', function () {
        const refreshUser = 'Refresh';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Copy User Group...'
       configOptionsUtils.selectToolMenuItem(refreshUser);

       loginUtils.logoutFromAMI();
    });
    it('TC43-Click on Action menu and then click on Help menu item to display the User group gadget Help page', function () {
        const helpUser = 'Help';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Copy User Group...'
       configOptionsUtils.selectToolMenuItem(helpUser);

       loginUtils.logoutFromAMI();
    });
});