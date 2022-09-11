import { AutoComplete, Input, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

export const CryptoTable = () => {
  const [data, setData] = useState();
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    return () => {
      handleGetData();
    };
  }, []);

  const handleGetData = () => {
    axios
      .get(`https://api.coincap.io/v2/assets`)
      .then((data) => {
        setData(data.data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleDebouncedValues = debounce(() => {
    handleGetData();

    const tempArray = [];
    data?.map((item) => tempArray.push({ value: item.name }));

    const tempArraySecond = tempArray.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()));

    setOptions(tempArraySecond);
  }, 500);

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      sorter: (a, b) => a.rank - b.rank,
      width: '16%',
    },
    {
      title: 'Coin name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: '17%',
    },
    {
      title: 'Coin Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      sorter: (a, b) => a.symbol - b.symbol,
      render: (symbol) => <Tag key={symbol}>{symbol}</Tag>,
      width: '16%',
    },
    {
      title: 'Coin Price',
      dataIndex: 'priceUsd',
      sorter: (a, b) => a.priceUsd - b.priceUsd,
      render: (price) => <>$ {price.slice(0, price.indexOf('.') + 3).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</>,
      defaultSortOrder: 'descend',
      width: '17%',
    },
    {
      title: 'Coin price last 24h',
      dataIndex: 'vwap24Hr',
      sorter: (a, b) => a.vwap24Hr - b.vwap24Hr,
      render: (price) => <>$ {price?.slice(0, price.indexOf('.') + 3).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</>,
      width: '17%',
    },
    {
      title: 'Coin Difference in the last 24h',
      dataIndex: 'changePercent24Hr',
      sorter: (a, b) => a.changePercent24Hr - b.changePercent24Hr,
      render: (price) => (
        <div style={{ color: Number(price) > 0 ? '#14A91A' : '#D00000' }}>
          {Number(price) > 0 && '+'}
          {price.slice(0, price.indexOf('.') + 6)}%
        </div>
      ),
      width: '17%',
    },
  ];

  const onChange = (data) => {
    setValue(data);
    handleDebouncedValues();
  };

  return (
    <div className="cryptoTable-wrapper">
      <AutoComplete
        placeholder="Search your your Questions"
        className="cryptoTable-search"
        onChange={onChange}
        value={value}
        options={options}
        dropdownAlign={{ offset: [-50, 20] }}
      >
        <Input.Search size="large" />
      </AutoComplete>

      <Table dataSource={data} columns={columns} />
    </div>
  );
};
