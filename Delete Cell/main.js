define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

        // Adds a cell above current cell (will be top if no cells)
        var delete_cell = function() {
        Jupyter.notebook.delete_cells()
      };
      // Button to add default cell
      var defaultCellButton = function () {
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add default cell',
                  'icon' : 'fa-play-circle',
                  'handler': add_cell
              }, 'add-default-cell', 'Default cell')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        // Use if only there are more than one cell 
        if (Jupyter.notebook.get_cells().length!=1){
            delete_cell();
        }
        defaultCellButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});