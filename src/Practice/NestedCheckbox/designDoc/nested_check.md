<!-- Nested Checkbox -->

/_ this are the constraint_/

1. If we checked or unchecked parent there all child should be checked or unchecked
2. if we some of the child of given parent is checked the parent should be indefined state

let arr=[

    {
        id:1,
        status:0 // 0 for unchecked 1-for checked -1 some of the child checked
        name:"Main Content",
        totalChildChecked:4,

        children:[
             id:1,
             status:0 // 0 for unchecked 1-for checked -1 some of the child checked
             name:"child Content",
        ]
    }

]

create context api
