#!/usr/bin/env python3
"""
deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List
from typing import Dict


class Server:
    """server class to paginate a database of popular baby names
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset


def get_hyper_index(self, index: int = None, page_size: int = 10) -> dict:
    """return a dictionary with pagination information based on index"""
    dataset = self.dataset()
    data_length = len(dataset)

    if index is None:
        index = 0

    assert 0 <= index <= data_length, "Index out of range"

    data = dataset[index:index + page_size]

    next_index = index + page_size

    return {
        'index': index,
        'next_index': next_index,
        'page_size': page_size,
        'data': data
    }
