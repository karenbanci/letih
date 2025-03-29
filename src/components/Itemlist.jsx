/**
 * ItemList Component
 *
 * The ItemList component is designed to display a list of items, where each item can have an optional title and description.
 * It supports rendering the items in either an unordered list or as individual divs based on the `isList` prop.
 * The component also allows for custom title and description components to be passed in for more flexibility in rendering.
 *
 * Props:
 * - items (Array): An array of objects where each object represents an item to be displayed. Each item should ideally contain:
 *   - id (string | number): A unique identifier for each item.
 *   - title (string): The title of the item.
 *   - description (string): The description of the item (optional).
 *
 * - titleComponent (ReactNode): A custom component to render the title of each item. If not provided, defaults to an <h4> element.
 *
 * - descriptionComponent (ReactNode): A custom component to render the description of each item. If not provided, defaults to a <p> element.
 *
 * - containerClass (string): Custom CSS class for the container of the list, allowing for styling flexibility.
 *
 * - isList (boolean): A flag indicating whether to render the items as a list (<ul>) or as separate div elements.
 *   - If true, the items will be rendered inside an unordered list.
 *   - If false, the items will be rendered as individual divs.
 *
 * Logic for Rendering:
 * The component includes logic to ensure that only items with valid titles or descriptions are rendered.
 * Specifically:
 * - If an item does not exist, or if both its title and description are absent, that item will not be rendered.
 * - For each item, the component checks:
 *   - If `item.title` is present; if not, it skips rendering that item.
 *   - If `item.description` is present; if not, it does not render the description section.
 * This ensures a cleaner output without any empty elements, providing a better user experience.
 *
 * Usage:
 * This component can be utilized to display various lists of items in a consistent manner. By passing the appropriate props,
 * the component dynamically adjusts its rendered content to suit different contexts.
 *
 * Example:
 * <ItemList
 *   items={[
 *     { id: 1, title: 'Benefit 1', description: 'Description for benefit 1' },
 *     { id: 2, title: 'Benefit 2', description: 'Description for benefit 2' },
 *     { id: 3, title: 'Benefit 3' } // This item does not have a description and will render only the title
 *   ]}
 *   titleComponent={({ item }) => <strong>{item.title}</strong>}
 *   descriptionComponent={({ children }) => <em>{children}</em>}
 *   containerClass="item-list-container"
 *   isList={true}
 * />
 *
 * Accessibility:
 * The component provides a structured list format, enhancing accessibility for users with screen readers.
 * Ensure that titles and descriptions are descriptive and meaningful.
 */
import React from "react";
import "../../src/shared/common.css";

const ItemList = ({
  items,
  titleComponent: TitleComponent,
  descriptionComponent: DescriptionComponent,
  containerClass,
  isList,
}) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No benefits available.</p>;
  }

  return (
    <div className={containerClass}>
      {isList ? (
        <ul>
          {items.map((item, index) => {
            if (!item || (!item.title && !item.description)) {
              return null;
            }
            return (
              <li key={item.id || index}>
                {TitleComponent ? (
                  <TitleComponent item={item}>{item.title}</TitleComponent>
                ) : (
                  <h3>{item.title}</h3>
                )}
                {item.description &&
                  (DescriptionComponent ? (
                    <DescriptionComponent>
                      {item.description}
                    </DescriptionComponent>
                  ) : (
                    <p>{item.description}</p>
                  ))}
              </li>
            );
          })}
        </ul>
      ) : (
        items.map((item) => {
          if (!item || (!item.title && !item.description)) {
            return null;
          }
          return (
            <div key={item.id}>
              {TitleComponent ? (
                <TitleComponent item={item}>{item.title}</TitleComponent>
              ) : (
                <h3>{item.title}</h3>
              )}
              {item.description &&
                (DescriptionComponent ? (
                  <DescriptionComponent>
                    {item.description}
                  </DescriptionComponent>
                ) : (
                  <p>{item.description}</p>
                ))}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ItemList;
