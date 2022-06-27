import { getters, actions } from "@/store";
import { getQlikApp } from "@/services/qlik-service";

export async function getFieldValues(field, type = "single-value") {
  const qlikApp = await getQlikApp(getters.qlikCurrentApp());

  if (qlikApp) {
    let fieldsValues = {};

    await qlikApp.createList(
      {
        qDef: {
          qFieldDefs: [field],
          qSortCriterias: [
            {
              qSortByState: 1,
              qSortByFrequency: 0,
              qSortByNumeric: 1,
              qSortByAscii: 1,
              qSortByLoadOrder: 1,
              qSortByExpression: 0,
              qExpression: {
                qv: ""
              },
              qSortByGreyness: 0
            }
          ]
        },
        qAutoSortByState: {
          qDisplayNumberOfRows: 1
        },
        qShowAlternatives: true,
        qInitialDataFetch: [
          {
            qTop: 0,
            qLeft: 0,
            qHeight: 1000,
            qWidth: 1
          }
        ]
      },
      function(reply) {
        const fieldValues = reply.qListObject.qDataPages[0].qMatrix;
        //Loop over fieldValues and traform them into in a aray with just qText value
        let newValues = [];
        let currentSelectedValues = [];
        for (const fieldValue of fieldValues) {
          //Reading only selected optional and alternative values for single and multi select field
          //Only for measure group we show all values(possible, alternative, excluded)
          if (type === "group-select") {
            newValues.push(fieldValue[0].qText);
            if (fieldValue[0].qState === "S" || fieldValue[0].qState === "XS") {
              currentSelectedValues.push(fieldValue[0].qText);
            }
          } else if (
            fieldValue[0].qState === "S" ||
            fieldValue[0].qState === "O" ||
            fieldValue[0].qState === "A"
          ) {
            newValues.push(fieldValue[0].qText);
            if (fieldValue[0].qState === "S") {
              currentSelectedValues.push(fieldValue[0].qText);
            }
          }
        }

        fieldsValues = {
          [field]: {
            data: newValues,
            currentSelectedValues
          }
        };
        actions.setQlikFieldValList(fieldsValues);
      }
    );
    return fieldsValues;
  }
}

export default {
  getFieldValues
};
