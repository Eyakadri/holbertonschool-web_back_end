#!/usr/bin/env python3
"""Pagination module"""
from typing import List, Tuple
import csv
import math


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """retrieves the index range of the page"""
    return ((page - 1) * page_size, ((page - 1) * page_size) + page_size)


class Server:
    """server class to paginate a database of popular baby names"""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """return the appropriate page of the dataset"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        dataset = self.dataset()
        try:
            start, end = index_range(page, page_size)
            return dataset[start:end]
        except IndexError:
            return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """Returns a dictionary with pagination information"""
        data = self.get_page(page, page_size)
        total_records = len(self.dataset())
        total_pages = math.ceil(total_records / page_size)

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
        }
