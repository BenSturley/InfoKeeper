D A T A S T O R E - R E C O R D S
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    - in order to insert a record, the following is required:
        - a datastore
            - see DATASTORES

        - a record
            - object in JSON format
                - e.g.:

                [stage0: prepare datastore]
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^

                [stage1: create record object]

                    const obj = 
                        { 
                            firstName:  'Ben',
                            lastName:   'Sturley',
                            email:      'bensturley@email.com',
                            tel:        '01234 567 890',
                        };

                [stage3: validation]
                    ... todo ...

                [stage3: convert record object to JSON string]
                    const json = JSON.stringify( obj );

                [stage4: persist record to datastore]

                