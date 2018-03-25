package content

import (
	"fmt"

	"github.com/bosssauce/reference"
	"github.com/ponzu-cms/ponzu/management/editor"
	"github.com/ponzu-cms/ponzu/system/item"
)

type Item struct {
	item.Item

	Name        string  `json:"name"`
	Image       string  `json:"image"`
	Category    string  `json:"category"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
}

// MarshalEditor writes a buffer of html to edit a Item within the CMS
// and implements editor.Editable
func (i *Item) MarshalEditor() ([]byte, error) {
	view, err := editor.Form(i,
		// Take note that the first argument to these Input-like functions
		// is the string version of each Item field, and must follow
		// this pattern for auto-decoding and auto-encoding reasons:
		editor.Field{
			View: editor.Input("Name", i, map[string]string{
				"label":       "Name",
				"type":        "text",
				"placeholder": "Enter the Name here",
			}),
		},
		editor.Field{
			View: editor.File("Image", i, map[string]string{
				"label":       "Image",
				"placeholder": "Upload the Image here",
			}),
		},
		editor.Field{
			View: reference.Select("Category", i, map[string]string{
				"label": "Category",
			},
				"Category",
				`{{ .name }} `,
			),
		},
		editor.Field{
			View: editor.Richtext("Description", i, map[string]string{
				"label":       "Description",
				"placeholder": "Enter the Description here",
			}),
		},
		editor.Field{
			View: editor.Input("Price", i, map[string]string{
				"label":       "Price",
				"type":        "text",
				"placeholder": "Enter the Price here",
			}),
		},
	)

	if err != nil {
		return nil, fmt.Errorf("Failed to render Item editor view: %s", err.Error())
	}

	return view, nil
}

func init() {
	item.Types["Item"] = func() interface{} { return new(Item) }
}

// String defines how a Item is printed. Update it using more descriptive
// fields from the Item struct type
func (i *Item) String() string {
	return i.Name
}
