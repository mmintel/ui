<template>
  <div>
    <div v-if="!data">
      No data available.
    </div>
    <table
      v-else
      class="table"
      :class="[
        $listeners.click ? 'table--clickable' : null,
        striped ? 'table--striped' : null,
        lined ? 'table--lined' : null
      ]"
    >
      <thead>
        <tr>
          <slot name="columns">
            <th
              v-for="column in columns"
              :key="column.value"
              :width="column.width"
              :style="{ textAlign: column.align || 'left' }"
              @click="sortBy(column.value)"
            >
              <span v-if="!column.hidden">
                {{ column.label }}
              </span>
            </th>
          </slot>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in sortedData"
          :key="index"
          @click="$emit('click', item)"
        >
          <slot :row="item">
            <td
              v-for="column in columnsWithValue"
              :key="column.value"
            >
              {{ itemValue(item, column) }}
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from 'lodash';
import VueTypes from 'vue-types';

export default {
  props: {
    data: VueTypes.arrayOf(Object),
    columns: VueTypes.arrayOf(VueTypes.shape({
      value: String,
      label: String,
      hidden: Boolean,
      align: String,
      width: String,
    })).isRequired,
    striped: VueTypes.bool.def(false),
    lined: VueTypes.bool.def(false),
  },
  data() {
    return {
      sort: this.columns[0].value,
      sortAscending: 0,
    };
  },
  computed: {
    columnsWithValue() {
      return this.columns.filter((column) => !!column.value);
    },
    sortedData() {
      const sorted = _.sortBy(this.data, this.sort);

      if (!this.sortAscending) {
        return _.reverse(sorted);
      }

      return sorted;
    },
  },
  methods: {
    itemValue(item, column) {
      return item[column.value];
    },
    sortBy(value) {
      if (this.sort !== value) {
        this.sort = value;
      } else {
        this.sortAscending = !this.sortAscending;
      }
    },
  },
};
</script>

<style lang="scss">
  .table {
    width: 100%;
    border-collapse:separate;
    border-spacing: 0 2px;

    thead {
      border-bottom: 1px solid var(--color-gray-9);
    }

    td, th {
      text-align: left;
      padding: 0.25rem 1rem;
    }

    th {
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    td {
      vertical-align: middle;
    }

    &--lined {
      tr:not(:last-child) {
        td {
          border-bottom: 1px solid var(--line-color);
        }
      }
    }

    &--striped {
      td {
        &:first-child {
          border-top-left-radius: var(--radius-3);
          border-bottom-left-radius: var(--radius-3);
        }

        &:last-child {
          border-top-right-radius: var(--radius-3);
          border-bottom-right-radius: var(--radius-3);
        }
      }

      tr:nth-child(2n) {
        td {
          background-color: var(--table-stripe-background-color);
        }
      }

      tr:hover {
        td {
          color: var(--table-hover-color);
          background-color: var(--table-hover-background-color);
        }
      }
    }


    &--clickable {
      td {
        cursor: pointer;
      }
    }
  }
</style>
